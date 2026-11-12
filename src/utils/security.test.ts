import test from 'node:test';
import assert from 'node:assert/strict';
import {
  maskNIK,
  maskKK,
  sanitizeInput,
  validateNIK,
  calculateGraduationScore,
  generateAuditSignature,
} from './security';

test('maskNIK correctly masks middle digits of 16-digit NIK according to UU PDP', () => {
  const result = maskNIK('3201015508820001');
  assert.equal(result, '320101******0001');
});

test('maskKK correctly masks middle digits of KK number', () => {
  const result = maskKK('3201010101010005');
  assert.equal(result, '320101******0005');
});

test('sanitizeInput escapes XSS dangerous characters', () => {
  const dangerous = '<script>alert("xss")</script>';
  const sanitized = sanitizeInput(dangerous);
  assert.equal(sanitized, '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;');
  assert.equal(sanitizeInput("O'Connor"), 'O&#39;Connor');
});

test('validateNIK validates 16 numeric digits accurately', () => {
  assert.equal(validateNIK('3201015508820001').isValid, true);
  assert.equal(validateNIK('320101550882').isValid, false);
  assert.equal(validateNIK('320101550882000199').isValid, false);
  assert.equal(validateNIK('32010155ABCD0001').isValid, false);
  assert.equal(validateNIK('').isValid, false);
});

test('calculateGraduationScore correctly determines Tergraduasi Mandiri at or above 75 points', () => {
  const highIncome = calculateGraduationScore({
    incomeScore: 90,
    housingScore: 80,
    businessCapabilityScore: 85,
    educationHealthScore: 80,
  });
  assert.equal(highIncome.status, 'Tergraduasi Mandiri');
  assert.ok(highIncome.totalScore >= 75);

  const transition = calculateGraduationScore({
    incomeScore: 50,
    housingScore: 50,
    businessCapabilityScore: 60,
    educationHealthScore: 60,
  });
  assert.equal(transition.status, 'Kandidat Graduasi');
  assert.ok(transition.totalScore >= 50 && transition.totalScore < 75);

  const low = calculateGraduationScore({
    incomeScore: 20,
    housingScore: 30,
    businessCapabilityScore: 20,
    educationHealthScore: 30,
  });
  assert.equal(low.status, 'Belum Siap');
  assert.ok(low.totalScore < 50);
});

test('generateAuditSignature produces deterministic signatures', () => {
  const sig1 = generateAuditSignature('admin_dinsos', 'VIEW_NIK', '2026-11-11 12:00:00');
  const sig2 = generateAuditSignature('admin_dinsos', 'VIEW_NIK', '2026-11-11 12:00:00');
  assert.equal(sig1, sig2);
  assert.ok(sig1.startsWith('SHA256-SIG-'));
});

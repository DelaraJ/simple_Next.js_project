export const validateIranianPhone = (phone: string): boolean => {
  // Iranian phone number pattern: 09xxxxxxxxx or +989xxxxxxxxx
  const iranianPhoneRegex = /^(\+98|0)?9\d{9}$/;
  return iranianPhoneRegex.test(phone.replace(/\s/g, ''));
};

export const formatIranianPhone = (value: string): string => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, '');
  
  // Format as 09xx xxx xxxx
  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 11)}`;
};
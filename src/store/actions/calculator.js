export const calc = (payload) => {
  const num = Number(payload);
  if (!Number.isNaN(num)) return { type: 'number', payload };

  return {
    type: payload,
  };
};

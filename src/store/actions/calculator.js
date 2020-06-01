export const calc = (payload) => {
  if (typeof payload === 'number') return { type: 'number', payload };

  return {
    type: payload,
  };
};

const initialState = {
  left: 0,
  right: 0,
  action: null,
  active: 'left',
  screen: 'left',
};

const mathMap = {
  '%': (a, b) => a % b,
  '/': (a, b) => a / b,
  x: (a, b) => a * b,
  '-': (a, b) => a + b,
  '+': (a, b) => a + b,
};

const normalizeNum = (number) => String(Number(number));

export default (state = initialState, { type, payload }) => {
  const { left, right, action, active, screen } = state;

  if (mathMap.hasOwnProperty(type)) {
    if (action) {
      const result = action(Number(left), Number(right));
      return {
        ...state,
        left: result,
        right: 0,
        active: 'right',
        action: mathMap[type],
        screen: 'left',
      };
    }
    return { ...state, action: mathMap[type], active: 'right', screen: 'left' };
  }

  switch (type) {
    case 'AC':
      return initialState;
    case '+/-':
      return { ...state, [active]: String(-Number(state[active])) };
    case '=':
      const result = action ? action(Number(left), Number(right)) : left;
      return { ...state, left: result, right: 0, active: 'left', screen: 'left' };
    case '.': {
      const newNumber = state[active].includes('.') ? state[active] : `${state[active]}.`;
      return { ...state, [active]: newNumber };
    }
    case 'number': {
      const newNumber = `${state[active]}${payload}`;
      return { ...state, [active]: normalizeNum(newNumber), screen: active };
    }

    default:
      return state;
  }
};

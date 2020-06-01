// 123 + 456
// left  right, screen = 'right'
const initialState = {
  left: '0',
  right: '0',
  result: '0',
  operator: null,
  active: 'left',
  screen: 'left',
};

const mathMap = {
  '%': (a, b) => a % b,
  '/': (a, b) => a / b,
  x: (a, b) => a * b,
  '*': (a, b) => a * b,
  '-': (a, b) => a + b,
  '+': (a, b) => a + b,
};

const normalizeNum = (number) => String(Number(number));

export default (state = initialState, { type, payload }) => {
  const { left, right, operator, active, screen } = state;

  if (mathMap.hasOwnProperty(type)) {
    if (operator) {
      const result = mathMap[operator](Number(left), Number(right));
      return {
        ...state,
        result: String(result),
        left: String(result),
        right: '0',
        active: 'right',
        operator: type,
        screen: 'left',
      };
    }
    return { ...state, operator: type, active: 'right', screen: 'left' };
  }

  switch (type) {
    case 'AC':
      return initialState;
    case '+/-':
      return { ...state, [active]: String(-Number(state[active])) };
    case '=':
      const result = operator ? mathMap[operator](Number(left), Number(right)) : left;
      return {
        ...state,
        result,
        left: result,
        right: '0',
        active: 'left',
        screen: 'result',
        operator: null,
      };
    case '.': {
      const newNumber = state[active].includes('.') ? state[active] : `${state[active]}.`;
      return { ...state, [active]: newNumber };
    }
    case 'number': {
      const newNumber = screen === 'result' ? String(payload) : `${state[active]}${payload}`;
      return { ...state, [active]: normalizeNum(newNumber), screen: active };
    }
    case 'BS': {
      const newNumber = state[active].slice(0, -1);
      return { ...state, [active]: normalizeNum(newNumber), screen: active };
    }

    default:
      return state;
  }
};

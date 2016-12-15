console.log(result);
GuessesBox
{
  '$$typeof': Symbol(react.element),
  type: 'div',
  key: null,
  ref: null,
  props:
   { children:
      { '$$typeof': Symbol(react.element),
        type: 'ul',
        key: null,
        ref: null,
        props: [Object],
        _owner: null,
        _store: {} } },
  _owner: null,
  _store: {}
  }

  =====================

  console.log(result.props.children);
  GuessesBox
{ '$$typeof': Symbol(react.element),
  type: 'ul',
  key: null,
  ref: null,
  props: { children: [] },
  _owner: null,
  _store: {} }

============

console.log(result.props.children.props);

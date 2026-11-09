# React – Props & Data Flow

## 1. Props
- Props pass data from a parent component to a child component.
- Props are read-only.
- React passes props as an object.

```jsx
// Parent
<NavBar user={user} />

// Child
function NavBar({ user }) {
  return <p>{user.name}</p>;
}
```

## 2. Props Destructuring

```jsx
// Without destructuring
const Status = (props) => {
  return <p>{props.isOnline}</p>;
};

// With destructuring
const Status = ({ isOnline }) => {
  return <p>{isOnline}</p>;
};
```

Both approaches are valid.

## 3. Passing Props Through Multiple Components

Data can flow through multiple levels of components.

```jsx
// App.jsx
<NavBar user={user} />

// NavBar.jsx
<Status isOnline={user.isOnline} />

// Status.jsx
const Status = ({ isOnline }) => {
  return <p>{isOnline ? "Online" : "Offline"}</p>;
};
```

## 4. Unidirectional Data Flow
- **Parent → Child:** Data flows through props.
- **Child → Parent:** Communication happens through callback functions passed as props.

## 5. Best Practice
- Fetch or manage shared data in a parent or shared data layer.
- Pass required data to child components through props.
- Keep presentational components focused on displaying data.

**Key takeaway:** Data flows down through props; events can flow up through callback functions.

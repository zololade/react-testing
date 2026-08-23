interface Prop {
  title: string;
}

function App({ title }: Prop) {
  return <h1>Hello {title}</h1>;
}

export { App };

declare module "*?hero" {
  const value: {
    img: { src: string; w: number; h: number };
    sources: Record<string, string>;
  };
  export default value;
}

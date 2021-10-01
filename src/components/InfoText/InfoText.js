import "./style.scss";

export default function InfoText({ title, children }) {
  return (
    <section id={title}>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="text">{children}</div>
    </section>
  );
}

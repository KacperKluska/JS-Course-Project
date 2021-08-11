import "./style.scss";

export default function InfoText({ title, children }) {
  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <div id="text">{children}</div>
    </section>
  );
}

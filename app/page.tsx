export default function Home() {
  return (
    <main className="cancellation-page">
      <section className="cancellation-notice" aria-labelledby="cancellation-title">
        <p className="cancellation-notice__eyebrow">bertie the boat</p>
        <h1 id="cancellation-title">event cancelled</h1>
        <p>
          quick update: we’re cancelling bertie the boat. with the forecast
          looking shaky and attendance lower than we’d need to make it feel
          right, we’d rather call it now than run a half-version of the event.
        </p>
        <p>
          all ticket payments will be refunded.
        </p>
      </section>
    </main>
  );
}

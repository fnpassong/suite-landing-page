import './works.scss';

export const Works = () => {
  return (
    <section className="works">
        <div className="works__wrapper">
            <div className="works__text">
                    <div className="works__imgPerson"></div>
                    <div className="works__pluma"></div>
                <h2 className="works__title">
                    It just<span> works.</span>
                </h2>
                <p className="works__paragraph">
                “I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”
                </p>
                <div className="works__person">
                    <div className="works__name">JEREMY ROBINSON</div>
                    <div className="works__sub">CMO, FYLO</div>
                </div>
            </div>
        </div>
    </section>
  )
}

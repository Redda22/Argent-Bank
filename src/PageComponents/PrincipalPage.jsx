
import iconchat from '../Assets/img/icon-chat.png';
import iconmoney from '../Assets/img/icon-money.png';
import iconsecurity from '../Assets/img/icon-security.png';
import Feature from '../OthersComponents/Feature';

function PrincipalPage() {
  return (
    <div className="PrincipalPage">
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            logo={iconchat}
            title={"You are our #1 priority"}
            para={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
          />
          <Feature
            logo={iconmoney}
            title={"More savings means higher rates"}
            para={"The more you save with us, the higher your interest rate will be!"}
          />
          <Feature
            logo={iconsecurity}
            title={"Security you can trust"}
            para={"We use top of the line encryption to make sure your data and money is always safe."}
          />
        </section>
      </main>
    </div>
  );
}

export default PrincipalPage;

import MeInfo from "./Me.info";
import "../../components/Me/Me.css";
import profileImg from "../../assets/profile.jpg";
import InfoNavigation from "../Me.buttons/InfoNavigation";

function Me() {
  return (
    <section>
      <div className="me-info">
        <div className="me-info-container">
          <MeInfo />
        </div>

        <div className="img-container">
          <div className="w-[152px] h-[152px] rounded-full overflow-hidden">
            <img
              src={profileImg}
              alt="profile"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <InfoNavigation />
    </section>
  );
}

export default Me;

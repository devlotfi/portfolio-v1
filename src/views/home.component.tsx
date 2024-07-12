import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Views } from "../context/navigation.context";
import ViewLayout from "../layout/view-layout.component";
import Developer from "../assets/svg/developer.svg";

export default function HomeView() {
  return (
    <ViewLayout view={Views.HOME} icon={faUser}>
      <div className="flex flex-1 justify-center items-center p-[1.5rem] md:p-0">
        <div className="flex w-full md:max-w-[90%] xl:max-w-[55rem] md:h-[20rem] bg-edge-100 animate-[fadeInRight_1s_ease] fill-mode-backward">
          <div className="flex flex-1 p-[1.5rem] md:p-[2rem] border translate-x-[0.5rem] translate-y-[-0.5rem] md:translate-x-[1rem] md:translate-y-[-1rem] border-edge-100 bg-base-100">
            <div className="flex flex-col md:flex-row flex-1 space-y-7 md:space-y-0 md:space-x-7">
              <img
                className="w-[13rem] lg:w-[20rem] animate-[flipInX_1s_0.5s_ease] fill-mode-backward"
                src={Developer}
                alt="developer"
              />

              <div className="flex flex-1 flex-col">
                <div className="flex text-[17pt] md:text-[20pt] text-edge-100 animate-[fadeInUp_0.7s_0.3s_ease] fill-mode-backward">
                  Hello, i am
                </div>
                <div className="flex text-[20pt] md:text-[25pt] text-primary-100 font-bold animate-[fadeInUp_0.7s_0.7s_ease] fill-mode-backward font-['Press_Start_2P']">
                  DEBBAL LOTFI
                </div>
                <div className="flex text-[15pt] md:text-[20pt] text-edge-100 animate-[fadeInUp_0.7s_1s_ease] fill-mode-backward">
                  I am a Full-Stack Web & Mobile developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
}

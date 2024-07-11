import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Views } from "../context/navigation.context";
import ViewLayout from "../layout/view-layout.component";

export default function HomeView() {
  return (
    <ViewLayout view={Views.HOME} icon={faUser}>
      <div className="flex flex-1 justify-center items-center p-[1.5rem] md:p-0">
        <div className="flex w-full md:max-w-[90%] xl:max-w-[55rem] md:h-[20rem] bg-edge-100 animate-[bounceInLeft_1s_ease] fill-mode-backward">
          <div className="flex flex-1 p-[1.5rem] md:p-[2rem] border translate-x-[0.5rem] translate-y-[-0.5rem] md:translate-x-[1rem] md:translate-y-[-1rem] border-edge-100 bg-base-100">
            <div className="flex flex-col md:flex-row flex-1 space-y-7 md:space-y-0 md:space-x-7">
              <div className="flex">
                <div className="flex border border-edge-100">
                  <div className="flex bg-base-100 border border-edge-100 translate-x-[0.5rem] translate-y-[-0.5rem]">
                    {/*  <Image
                      src={Avatar}
                      alt="avatar"
                      style={{ objectFit: "contain" }}
                      quality={100}
                      className="max-w-[10rem] md:max-w-[17rem]"
                      priority
                    ></Image> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex text-[17pt] md:text-[20pt] text-edge-100">
                  Hello, i am
                </div>
                <div className="flex text-[20pt] md:text-[25pt] text-primary-100 font-bold">
                  &lt;Debbal Lotfi/&gt;
                </div>
                <div className="flex text-[15pt] md:text-[20pt] text-edge-100">
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

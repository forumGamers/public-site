import type { UserData } from "@/interfaces/user";
import { Avatar } from "@/components/atom/avatar/material-tailwind";
import { LazyLoadImage } from "@/components/images/lazy-load-image";
import { blankBackground, defaultImgProfile } from "@/constants";
import { Typography } from "@/components/atom/typography/typograph";
import ButtonEditProfile from "@/components/organ/button/roundedButton";
import ProfileTabs, { type Tabs } from "@/components/mollecul/tabs/profileTabs";

export interface UserPageProps {
  user: UserData;
  tabs: Tabs[];
  edit: boolean;
}

export default function UserPage({ user, tabs, edit }: UserPageProps) {
  return (
    <>
      <section className="flex flex-col items-center justify-center md:ml-[0] ml-[126px] mr-[22px] md:px-5 w-[91%] md:w-full">
        <div className="flex md:flex-col flex-row gap-[33px] items-center justify-center w-[93%] md:w-full">
          <div className="flex flex-col items-center justify-center md:mt-0 mt-[11px] w-3/4 md:w-full">
            <div className="bg-black-900 border border-gray-700 border-solid flex flex-col items-center justify-center rounded-tl-[10px] rounded-tr-[10px] w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="md:h-[154px] h-[239px] relative w-full">
                  <LazyLoadImage
                    className="absolute h-[154px] inset-x-[0] mx-auto object-cover top-[0] w-full -z-50"
                    src={user.background_url || blankBackground}
                    alt="user background"
                  />
                  <Avatar
                    src={user.image_url || defaultImgProfile}
                    className="absolute bottom-[15%] h-[140px] left-[7%] rounded-[50%] w-[140px]"
                    alt="user profile"
                    withBorder
                    color="blue"
                  />
                  <Typography
                    className="text-left absolute bottom-[0] left-[2%] text-gray-200 text-lg font-poppins font-semibold"
                    as="p">
                    {user.fullname}
                  </Typography>
                  {edit && <ButtonEditProfile user={user}/>}
                  <Typography
                    as="p"
                    className="md:ml-[0] ml-[23px] text-gray-400 text-xs font-poppins font-semibold">
                    {user.username}
                  </Typography>
                  <Typography
                    as="p"
                    className="md:ml-[0] ml-[23px] mt-2.5 text-white-A700 text-xs w-[93%] sm:w-full font-medium font-poppins">
                    {user.bio || ""}
                  </Typography>
                  <section className="flex flex-row items-start justify-start md:ml-[0] ml-[22px] mt-[22px] w-1/5 md:w-full">
                    <Typography
                      className="text-gray-400 text-xs font-poppins font-semibold"
                      as="p">
                      {user?.followers?.length || 0}
                    </Typography>
                    <Typography
                      as="p"
                      className="ml-[5px] text-gray-400 text-xs font-poppins font-semibold">
                      {`Follower${user?.followers?.length > 1 ? "s" : ""}`}
                    </Typography>
                    <Typography
                      as="p"
                      className="h-[18px] ml-[11px] text-gray-400 text-xs font-poppins font-semibold">
                      {user?.following?.length || 0}
                    </Typography>
                    <Typography as="p" className="ml-1.5 text-gray-400 text-xs">
                      {`Followings${user?.following?.length > 1 ? "s" : ""}`}
                    </Typography>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProfileTabs tabs={tabs} />
    </>
  );
}

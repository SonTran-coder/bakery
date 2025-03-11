"use client";

import {
  AddIcCall,
  Facebook,
  Instagram,
  LinkedIn,
  Logo,
  MailOutline,
  Twitter,
} from "@/assets/svgs";
import { exceptPage } from "./navigation-bar";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  if (exceptPage.some((page) => pathname.startsWith(page))) {
    return <></>;
  }
  
  return (
    <div className="w-full">
      <div className="w-full px-[10px] sm:px-4 xl:px-[80px] pb-8 pt-14 border-b border-b-primary-500 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-14">
        <div className="flex flex-col gap-[10px] sm:col-span-3 xl:col-span-1 w-full items-center">
          <Logo />
          <p className="font-semibold text-xl leading-9">Annie Gâteaux</p>
        </div>
        <div className="flex flex-col gap-6 leading-loose">
          <p className="text-xl font-semibold">Giờ mở cửa</p>
          <div>
            <p>Thứ 2 - thứ 6: 7h30 - 21h30</p>
            <p>Thứ 7 & Chủ nhật: 7h30 - 14h</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 leading-loose">
          <p className="text-xl font-semibold">Địa chỉ</p>
          <p>14 Lê Văn Lương, Trung Hoà, Cầu Giấy, Hà Nội</p>
        </div>
        <div className="flex flex-col gap-6 leading-loose">
          <p className="text-xl font-semibold">Liên hệ</p>
          <div>
            <div className="flex items-center gap-2">
              <MailOutline />
              <p className="leading-loose">cskh@annie.com.vn</p>
            </div>
            <div className="flex items-center gap-2">
              <AddIcCall />
              <p className="leading-loose">093.501.6564</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-[80px] pt-8 pb-14">
        <p className="text-sm leading-loose">©2023, All right reserved.</p>
        <div className="flex items-center gap-3">
          <Facebook />
          <Instagram />
          <Twitter />
          <LinkedIn />
        </div>
      </div>
    </div>
  );
}

export { Footer };

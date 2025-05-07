import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/Data";

const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/Icons/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Home",
          href: "/dashboard/admin",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/Icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Teachers",
          href: "/dashboard/list/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/Icons/group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png",
          label: "Students",
          href: "/dashboard/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/Icons/menu_book_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Subjects",
          href: "/dashboard/list/subjects",
          visible: ["admin"],
        },
        {
          icon: "/Icons/scoreboard_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Classes",
          href: "/dashboard/list/classes",
          visible: ["admin", "teacher"],
        },
    
        {
          icon: "/Icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Exams",
          href: "/dashboard/list/exam",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/Icons/scoreboard_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Assignments",
          href: "/dashboard/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/Icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Results",
          href: "/dashboard/list/result",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/Icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Messages",
          href: "/dashboard/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/Icons/brand_awareness_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Announcements",
          href: "/dashboard/list/announcement",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: "/Icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/Icons/settings_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png",
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/Icons/logout_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png",
          label: "Logout",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];


const Menu=()=>{
    return (
        <div className="mt-4 text-sm">
          {menuItems.map((i)=>(
            <div className="flex flex-col gap-2" key={i.title}>
                <span className="hidden lg:block text-blue-400 font-light my-4">{i.title}</span>
                {i.items.map((item)=>{
                  if(item.visible.includes(role)){
                    return(
                    <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-white py-2">
                        <Image src={item.icon} alt="" width={20} height={20}/>
                        <span className="hidden lg:block">{item.label}</span>
                    </Link>
                    );
                  }
} )}
               
                </div>
          ))}
        </div>
    )
}

export default Menu
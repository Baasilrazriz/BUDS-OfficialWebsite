import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  let Links = [
    { name: "Events", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "Team", link: "/" },
  ];
  const gsapRef1 = useRef(null);
  const gsapRef2 = useRef(null);
  const gsapRef3 = useRef(null);
  const gsapRef4 = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(gsapRef1.current, {
      y: 100,
      opacity: 0,
      delay: 0.3,
      duration: 0.5,
      stagger: 0.3,
    }),
      gsap.from(gsapRef2.current, {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
      }),
      gsap.from(gsapRef3.current, {
        y: 100,
        opacity: 0,
        delay: 0.75,
        duration: 0.5,
      }),
      gsap.from(gsapRef4.current, {
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 0.5,
      });
  });

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
    );

    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        rotate: 3,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotate: 0,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power1.inOut",
      });
    };

    const buttonElement = buttonRef.current;
    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r to-lightBlue-accentPrimary from-lightBlue-textPrimary py-1 text-sm">
        <div className="flex items-center justify-center gap-x-1 font-mono">
          <p className="max-md:hidden text-lightBlue-divider">
            Become the part of Revolution -
          </p>
          <a
            className="flex items-center text-lightBlue-secondaryBg gap-1"
            href="/register"
          >
            <p className="hover:underline">Register now!</p>
            <FaArrowRight className="size-2.5" />
          </a>
        </div>
      </div>

      <header className="max-md:h-16 sticky top-0 backdrop-blur-sm z-40">
        <div className="mx-auto md:px-7 h-24">
          <div className="flex items-center justify-between">
            <a className="h-20 size-auto" href="/">
              <img
                src="src/assets/buds-new.png"
                className="max-md:h-16 max-md:mt-2 h-28"
                alt="LOGO"
                loading="lazy"
              />
            </a>

            <ul className="md:hidden flex gap-7 text-sm  text-lightBlue-textPrimary font-semibold">
              {Links.map((link) => (
                <li>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
                  <button
              ref={buttonRef}
              className="text-sm font-bold mr-3 -mt-1/2 text-lightBlue-secondaryBg px-3 py-1 rounded-lg bg-gradient-to-r to-lightBlue-accentPrimary from-lightBlue-textPrimary"
            >
              <a href="/register">Join</a>
              
            </button>

            </ul>

            <nav className="hidden md:flex ml-3 gap-12 text-lightBlue-textPrimary font-semibold">
              <a
                ref={gsapRef1}
                className="hover:text-lightBlue-textSecondary"
                href=""
              >
                News
              </a>
              <a
                ref={gsapRef2}
                className="hover:text-lightBlue-textSecondary"
                href=""
              >
                Events
              </a>
              <a
                ref={gsapRef3}
                className="hover:text-lightBlue-textSecondary"
                href=""
              >
                Gallery
              </a>
              <a
                ref={gsapRef4}
                className="hover:text-lightBlue-textSecondary"
                href=""
              >
                Team
              </a>
            </nav>
            <button
              ref={buttonRef}
              className="max-md:hidden px-4 py-2 text-lightBlue-secondaryBg font-bold rounded-lg bg-gradient-to-r to-lightBlue-accentPrimary from-lightBlue-textPrimary hover:to-lightBlue-textPrimary hover:from-lightBlue-accentPrimary  transition-all"
            >
              <a href="/register"> Become a Member</a>
             
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

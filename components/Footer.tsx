import React from "react";
import { WindowsLogo } from "./UI/icons/windowsLogo";
import Model from "./UI/Model";
import Image from "next/image";
import Button from "./UI/Button";

export default function Footer() {
  return (
    <footer className="h-10 bg-blue-900 w-full absolute bottom-0 left-0">
      <Model
        button={{
          props: {
            className:
              "flex items-center gap-2 bg-main-green rounded-br-xl rounded-tr-xl px-3 h-10",
          },
          content: (
            <>
              <WindowsLogo className="w-8 h-8 " />
              <span className="font-bold text-lg font-franklinGothic text-white text-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]">
                Start
              </span>
            </>
          ),
        }}
        model={
          <div className="bg-start-menu rounded-t-[5px] shadow-menu h-[38rem] w-[28rem] absolute bottom-[2.5rem] left-0 grid grid-cols-2 menu-grid">
            <header className="col-span-2 flex items-center px-4 py-1 gap-2 max-h-full menu-header  ">
              <Image
                src="/my_computer.png"
                alt="My Computer"
                width={100}
                height={100}
                className=" w-18 p-1 border-start-menu-border rounded border-3"
              />
              <h3>Administer</h3>
            </header>
            <ul className="  h-full overflow-auto bg-white">
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <span>
                  <h4>Text</h4>
                  <p>bla bla bla bla</p>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
            </ul>
            <ul className="  h-full overflow-auto bg-start-menu-right border-l-start-menu-border border-l">
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <h4>Text</h4>
                <p>bla bla bla bla</p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/my_computer.png"
                  alt="My Computer"
                  width={100}
                  height={100}
                  className="w-16 h-16 mb-4"
                />
                <p>bla bla bla bla</p>
              </li>
            </ul>
            <footer className="col-span-2 flex items-center justify-end gap-2 menu-header px-4  ">
              <Button className="flex items-center gap-2">
                <WindowsLogo className="w-8 h-8 " />
                <p>Log Off</p>
              </Button>
              <Button className="flex items-center gap-2">
                <WindowsLogo className="w-8 h-8 " />
                <p>Shut Down</p>
              </Button>
            </footer>
          </div>
        }
      ></Model>
    </footer>
  );
}

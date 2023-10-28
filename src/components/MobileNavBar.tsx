import { component$, useSignal } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import classNames from "classnames";
import { menuNavLinks } from "./NavBar";
import CloseIcon from "./icons/CloseIcon";
import HamburgerIcon from "./icons/HamburgerIcon";

const MobileNavBar = component$(() => {
  const nav = useNavigate();

  const isOpen = useSignal(false);

  const loc = useLocation();

  const pathname = loc.url.pathname;

  return (
    <nav class="md:hidden flex mt-4 justify-end container text-gray text-sm">
      <button
        class="z-40 border border-black p-1.5 rounded"
        aria-label="open menu"
        onClick$={() => {
          isOpen.value = !isOpen.value;
        }}
      >
        <HamburgerIcon class="w-5 h-5" />
      </button>
      {isOpen.value && (
        <>
          <div
            onClick$={() => {
              isOpen.value = false;
            }}
            class="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-40 bg-black/10"
          />
          <div class="fixed top-0 left-0 right-0 bg-white p-4 text-black shadow-2xl z-50">
            <div
              class="flex justify-end text-xl"
              onClick$={() => {
                isOpen.value = false;
              }}
            >
              <CloseIcon />
            </div>
            <ul class="flex flex-col gap-4">
              {menuNavLinks.map((el) => (
                <a
                  preventdefault:click
                  onClick$={() => {
                    isOpen.value = false;
                    nav(el.path);
                  }}
                >
                  <NavElement
                    key={el.path}
                    isCurrent={pathname === el.path}
                    label={el.label}
                  />
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
});

const NavElement = ({
  isCurrent,
  label,
}: {
  isCurrent: boolean;
  label: string;
}) => (
  <li
    class={classNames(
      "py-4 cursor-pointer",
      isCurrent ? "text-primary font-semibold " : ""
    )}
  >
    {label}
  </li>
);

export default MobileNavBar;

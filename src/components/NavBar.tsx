import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import classNames from "classnames";

export const menuNavLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Works",
    path: "/works",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const NavBar = component$(() => {
  const loc = useLocation();

  const pathname = loc.url.pathname;

  return (
    <nav class="hidden md:flex mt-8 justify-end container text-gray text-sm">
      <ul class="flex gap-8">
        {menuNavLinks.map((el) => (
          <NavElement
            key={el.path}
            isCurrent={pathname === el.path}
            label={el.label}
          />
        ))}
      </ul>
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
  <li class={classNames(isCurrent ? "text-primary font-semibold" : "")}>
    {label}
  </li>
);

export default NavBar;

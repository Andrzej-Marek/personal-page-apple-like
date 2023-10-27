import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import classNames from "classnames";

export const menuNavLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Portfolio",
    path: "/portfolio/",
  },
  {
    label: "CV",
    path: "/cv/",
  },
  {
    label: "Contact",
    path: "/contact/",
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
            path={el.path}
          />
        ))}
      </ul>
    </nav>
  );
});

const NavElement = ({
  isCurrent,
  label,
  path,
}: {
  isCurrent: boolean;
  label: string;
  path: string;
}) => (
  <li class={classNames(isCurrent ? "text-primary font-semibold" : "")}>
    <Link href={path}>{label}</Link>
  </li>
);

export default NavBar;

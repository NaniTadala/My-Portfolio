import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../utils/AcmeLogo";
import { ThemeSwitcher } from "../utils/DarkmodeButton";
import { Bio } from "@/data/constants";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setIsActive] = React.useState('home');

  const menuItems = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
    "Github profile",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Portfolio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem isActive={active === 'home'}>
          <Link color="foreground" href="#" onClick={() => setIsActive('home')}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={active === 'skills'}>
          <Link color="foreground" href="#skills" onClick={() => setIsActive('skills')}>
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive={active === 'projects'}>
          <Link color="foreground" href="#projects" onClick={() => setIsActive('projects')}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={active === 'education'}>
          <Link color="foreground" href="#education" onClick={() => setIsActive('education')}>
            Education
          </Link>
        </NavbarItem>
        <NavbarItem isActive={active === 'contact'}>
          <Link color="foreground" href="#contact" onClick={() => setIsActive('contact')}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="flex">
          <Button as={Link} target="_blank" color="primary" href={Bio.github} variant="bordered">
            Github profile
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={`#${item === 'About' ? '' : item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComponent;
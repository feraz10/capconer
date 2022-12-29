import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Input,
  Button,
} from "reactstrap";

// import cc from "./image/cc.jpg"
import { CgCircleci } from "react-icons/cg";
import { TfiShoppingCartFull } from "react-icons/tfi";

export default function CustNavbar() {
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" fixed-top>
        <NavbarBrand href="/">
          <CgCircleci /> CapCorner
        </NavbarBrand>

        <NavbarToggler />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/about">About US</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/cap">hats & caps</DropdownItem>
                <DropdownItem href="/eyewear">eyewear</DropdownItem>
                <DropdownItem href="/belt">Belt</DropdownItem>

                <DropdownItem href="/wallets">Wallets</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <Nav navbar>
            <Form className="class=" form-inline>
              <Input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
              />
              <Button type="submit" color="warning" outline>
                Search
              </Button>
               
            </Form>
            </Nav> */}
          <Nav navbar>
            <NavItem>
              <NavLink href="/cart">
                Cart <TfiShoppingCartFull />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

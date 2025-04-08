import React, { useState } from "react";
import { Layout, Menu, Divider, Badge, Button, Popover, Dropdown } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import sellerMenuItems from "../constant/seller-Menu-Items";
import Images from "../assets/Images/ImageComponent/Images";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaCircleUser, FaRegMessage } from "react-icons/fa6";
import AdminDropdownItems from "../constant/admin-Dropdown-items";

const { Header, Content, Footer, Sider } = Layout;

const SellerPanelLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const siderWidth = collapsed ? 80 : 240;
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  // Button Style for Icons
  const buttonStyle = {
    // border: "none",
    fontSize: "1.5em",
    padding: "0.8em",
    background: "none",
    color: "#000",
    cursor: "pointer",
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: "#fff",
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
        width={siderWidth}
      >
        <div
          style={{
            textAlign: "center",
            padding: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button type="link" onClick={() => navigate("/seller")}>
            <img src={Images.Logo} alt="Logo" width={35} height={35} />
            {!collapsed && <h3 style={{ marginLeft: "10px" }}>ShopSphere</h3>}
          </Button>
        </div>
        <Divider />
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={sellerMenuItems(navigate)}
          style={{
            background: "transparent",
          }}
        />
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: `calc(100% - ${siderWidth}px)`,
            zIndex: 1000,
            backgroundColor: "white",
            display: "flex",
            height: "88px",
            alignItems: "center",
            justifyContent: "flex-end",
            transition: "width 0.3s ease-in-out",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5em",
              fontSize: "1.3em",
            }}
          >
            {/* Notifications */}
            <Badge count={5}>
              <Popover
                placement="bottom"
                title={"Notifications"}
                content={"This is your all notifications"}
              >
                <Button
                  icon={<IoMdNotificationsOutline />}
                  style={buttonStyle}
                  aria-label="Notifications"
                />
              </Popover>
            </Badge>

            {/* Dark Mode Toggle */}
            <Popover placement="bottom" title={"Toggle to change theme"}>
              <Button
                icon={<MdDarkMode />}
                style={{
                  fontSize: "1.2em",
                  padding: "0.8em",
                  background: "none",
                  color: "#000",
                  cursor: "pointer",
                }}
                aria-label="Toggle Dark Mode"
              />
            </Popover>

            {/* Messages */}
            <Badge count={10}>
              <Popover
                placement="bottom"
                title={"Messages"}
                content={"These are your messages"}
              >
                <Button
                  icon={<FaRegMessage />}
                  style={buttonStyle}
                  aria-label="Messages"
                />
              </Popover>
            </Badge>

            {/* User Menu */}
            <Dropdown menu={AdminDropdownItems(navigate)} placement="bottom">
              <Button
                style={{
                  fontSize: "1.5em",
                  padding: "0.8em",
                  background: "none",
                  color: "#000",
                  cursor: "pointer",
                }}
                aria-label="User Menu"
              >
                <FaCircleUser style={{ fontSize: "1.2em" }} />
                <p style={{ fontSize: "0.6em", marginLeft: "5px" }}>
                  {user.firstName}
                </p>
              </Button>
            </Dropdown>
          </div>
        </Header>

        {/* Content */}
        <Content style={{ marginTop: "88px", padding: "1em" }}>
          <Outlet />
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SellerPanelLayout;

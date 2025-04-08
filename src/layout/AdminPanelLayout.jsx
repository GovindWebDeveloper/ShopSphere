import React, { useState } from "react";
import { Badge, Button, Divider, Dropdown, Layout, Menu, Popover } from "antd";
import Images from "../assets/Images/ImageComponent/Images";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import adminMenuItems from "../constant/admin-Menu-Items";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaCircleUser, FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import AdminDropdownItems from "../constant/admin-Dropdown-items";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AdminPanelLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const siderWidth = collapsed ? 80 : 240;
  const navigate = useNavigate();

  // Button Style for Icons
  const buttonStyle = {
    border: "none",
    fontSize: "1.5em",
    padding: "0.5em",
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
          <img src={Images.Logo} alt="Logo" width={35} height={35} />
          {!collapsed && <h3 style={{ marginLeft: "10px" }}>ShopSphere</h3>}
        </div>
        <Divider />
        <Menu
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          items={adminMenuItems}
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
              marginRight: "2.5em",
            }}
          >
            {/* Notifications */}
            <Badge count={5}>
              <Popover
                placement="bottom"
                title={"Notifications"}
                content={"This is your notifications"}
              >
                <Button
                  style={buttonStyle}
                  icon={<IoMdNotificationsOutline />}
                  aria-label="Notifications"
                />
              </Popover>
            </Badge>

            {/* Dark Mode Toggle */}
            <Popover placement="bottom" title={"Toggle to change theme"}>
              <Button
                icon={<MdDarkMode />}
                style={buttonStyle}
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
              <Button style={buttonStyle} aria-label="User Menu">
                <FaCircleUser style={{ fontSize: "1.2em" }} />
              </Button>
            </Dropdown>

            {/* Settings */}
            <Button
              style={buttonStyle}
              icon={<AnimatedSettingsIcon />}
              aria-label="Settings"
            />
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

// Animated Settings Icon
const AnimatedSettingsIcon = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <IoSettingsOutline />
  </motion.div>
);

export default AdminPanelLayout;

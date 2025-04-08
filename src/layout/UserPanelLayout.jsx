import React, { useState, useEffect } from "react";
import { Button, Dropdown, Layout, message } from "antd";
import Images from "../assets/Images/ImageComponent/Images";
import { Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { FcAbout, FcContacts } from "react-icons/fc";
import { IoNotifications } from "react-icons/io5";
import { FaBox, FaCircleUser, FaTag } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdFavorite } from "react-icons/md";
import { IoIosGift } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";

const { Header, Content, Footer } = Layout;

const UserPanelLayout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setIsLoggedIn(true);
        setUserName(parsedUser.name || "User");
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userType"); // Ensure role is cleared
    setIsLoggedIn(false);
    setUserName("Guest");
    message.success("You have successfully logged out.");
    navigate(0); // Refresh page to reapply routing logic
  };

  const footerYear = new Date().getFullYear();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img src={Images.Logo} alt="Logo" width={45} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1em",
            fontSize: "1.5em",
          }}
        >
          <Button type="text" icon={<FaHome />} onClick={() => navigate("/")}>
            Home
          </Button>

          {isLoggedIn ? (
            <>
              <Button
                type="text"
                icon={<BiCart />}
                onClick={() => navigate("/checkout")}
              >
                My Cart
              </Button>
              <Button
                type="text"
                icon={<AiOutlineProduct />}
                onClick={() => navigate("/products")}
              >
                Products
              </Button>

              <Dropdown
                menu={{
                  items: [
                    {
                      key: "1",
                      label: (
                        <div style={{ textAlign: "center" }}>
                          <FaCircleUser
                            style={{ fontSize: "2.5em", minWidth: "100px" }}
                          />
                        </div>
                      ),
                    },
                    {
                      key: "2",
                      label: (
                        <Button
                          icon={<CgProfile />}
                          type="link"
                          style={{ color: "black" }}
                          onClick={() => navigate("/profile")}
                        >
                          My Profile
                        </Button>
                      ),
                    },
                    {
                      key: "3",
                      label: (
                        <Button
                          icon={<FaBox />}
                          type="link"
                          onClick={() => navigate("/orders")}
                          style={{ color: "black" }}
                        >
                          My Orders
                        </Button>
                      ),
                    },
                    {
                      key: "4",
                      label: (
                        <Button
                          icon={<MdFavorite />}
                          type="link"
                          onClick={() => navigate("/favorite")}
                          style={{ color: "black" }}
                        >
                          Wishlist
                        </Button>
                      ),
                    },
                    {
                      key: "5",
                      label: (
                        <Button
                          icon={<FaTag />}
                          type="link"
                          style={{ color: "black" }}
                        >
                          Coupons
                        </Button>
                      ),
                    },
                    {
                      key: "6",
                      label: (
                        <Button
                          icon={<IoIosGift />}
                          type="link"
                          style={{ color: "black" }}
                        >
                          Gift Cards
                        </Button>
                      ),
                    },
                    {
                      key: "7",
                      label: (
                        <Button
                          icon={<IoNotifications />}
                          type="link"
                          style={{ color: "black" }}
                        >
                          Notifications
                        </Button>
                      ),
                    },
                    {
                      key: "8",
                      label: (
                        <Button
                          type="link"
                          style={{ color: "red" }}
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      ),
                    },
                  ],
                }}
                placement="bottomLeft"
              >
                <Button icon={<FaUser />}>{userName}</Button>
              </Dropdown>
            </>
          ) : (
            <>
              <Button
                type="text"
                icon={<FcAbout />}
                onClick={() => navigate("/about")}
              >
                About
              </Button>
              <Button
                type="text"
                icon={<FcContacts />}
                onClick={() => navigate("/contact")}
              >
                Contact
              </Button>
              <Button onClick={() => navigate("/login")}>Login</Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </>
          )}
        </div>
      </Header>
      <Content style={{ padding: "0", minHeight: "90vh" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{footerYear} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default UserPanelLayout;

import {
  InboxOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BiSupport } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { Button } from "antd";

const AdminDropdownItems = (navigate) => ({
  items: [
    {
      key: "1",
      label: (
        <Button
          type="link"
          onClick={() => navigate("/account")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1.2em",
          }}
        >
          <UserOutlined />
          <span>Account</span>
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          onClick={() => navigate("/inbox")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1.2em",
          }}
        >
          <InboxOutlined />
          <span>Inbox</span>
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          type="link"
          onClick={() => navigate("/taskboard")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1.2em",
          }}
        >
          <GrTask />
          <span>Taskboard</span>
        </Button>
      ),
    },
    {
      key: "4",
      label: (
        <Button
          type="link"
          onClick={() => navigate("/setting")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1.2em",
          }}
        >
          <SettingOutlined />
          <span>Setting</span>
        </Button>
      ),
    },
    {
      key: "5",
      label: (
        <Button
          type="link"
          onClick={() => navigate("/support")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1.2em",
          }}
        >
          <BiSupport />
          <span>Support</span>
        </Button>
      ),
    },
    {
      key: "6",
      label: (
        <Button
          type="link"
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            navigate("/");
            console.log("logging out");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1.2em",
            color: "red",
          }}
        >
          <LogoutOutlined />
          <span>Logout</span>
        </Button>
      ),
    },
  ],
});

export default AdminDropdownItems;

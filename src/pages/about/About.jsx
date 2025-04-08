import { Card, Divider } from "antd";
import Images from "../../assets/Images/ImageComponent/Images";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          color: "#4a4a49",
          backgroundImage: `url(${Images.WelcomeBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "85vh",
          marginTop: "0",
          padding: "3em",
        }}
      >
        <h1 style={{ fontSize: "4em" }}>About Us</h1>
        <Divider />
        <br />
        <h2 style={{ fontSize: "2.5em" }}>
          Welcome to <span style={{ fontWeight: "bolder" }}>ShopSphere</span>{" "}
          –Your One-stop Destination for <br />
          Premium<span style={{ fontWeight: "bolder" }}> Men&apos;s Wear,</span>
          <span style={{ fontWeight: "bolder" }}> Women&apos;s Wear,</span>
          <br />
          <span style={{ fontWeight: "bolder" }}>Jewelleries</span>, and{" "}
          <span style={{ fontWeight: "bolder" }}>Electronics</span>
        </h2>
        <br />
        <br />
        <h3 style={{ fontSize: "1.5em" }}>
          We are passionate about providing high-quality products at competitive
          <br />
          prices, ensuring that our customers enjoy a seamless shopping
          <br />
          experience.
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "3em",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
          // border: "0.5em solid #023301",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1 style={{ fontSize: "4em" }}>Our Mission</h1>
          <Divider />
          <img src={Images.Mission} alt="Mission-Image" width={500} />
        </div>
        <div style={{ width: "50%" }}>
          <p
            style={{
              fontSize: "1.6em",
              padding: "1.5em",
              border: "0.2em solid #034f01",
              borderRadius: "2.5em 0",
            }}
          >
            &quot;At <strong>ShopSphere</strong>, we strive to bring style,
            quality, and innovation together. Whether you&apos;re looking for
            the latest fashion trends, elegant jewelry, or cutting-edge
            electronics, we’ve got you covered. Our mission is to make shopping
            easy, convenient, and enjoyable for everyone.&quot;
          </p>
        </div>
      </div>
      <div
        style={{
          padding: "3em",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "3.8em" }}>Why Choose Us?</h1>
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Card
            hoverable
            style={{
              width: "280px",
              height: "300px",
              backgroundColor: "#EF4444",
            }}
          >
            <h2 style={{ textAlign: "center", fontSize: "2em" }}>
              Wide Range of Products
            </h2>
            <hr />
            <p
              style={{ fontSize: "1.3em", textAlign: "center", padding: "1em" }}
            >
              {" "}
              From trendy clothing to high-tech gadgets, we offer a variety of
              products to suit your needs.
            </p>
          </Card>
          <Card
            hoverable
            style={{
              width: "280px",
              height: "300px",
              backgroundColor: "#3B82F6",
            }}
          >
            <h2 style={{ textAlign: "center", fontSize: "2em" }}>
              Affordable Prices
            </h2>
            <hr />
            <p
              style={{ fontSize: "1.3em", textAlign: "center", padding: "1em" }}
            >
              {" "}
              We believe in offering high-quality products at prices that won’t
              break the bank.
            </p>
          </Card>
          <Card
            hoverable
            style={{
              width: "280px",
              height: "300px",
              backgroundColor: "#10B981",
            }}
          >
            <h2 style={{ textAlign: "center", fontSize: "2em" }}>
              Secure Shopping
            </h2>
            <hr />
            <p
              style={{ fontSize: "1.3em", textAlign: "center", padding: "1em" }}
            >
              {" "}
              With safe payment options and a reliable checkout process, your
              security is our priority.
            </p>
          </Card>
          <Card
            hoverable
            style={{
              width: "280px",
              height: "300px",
              backgroundColor: "#8B5CF6",
            }}
          >
            <h2 style={{ textAlign: "center", fontSize: "2em" }}>
              Fast & Reliable Shipping
            </h2>
            <hr />
            <p
              style={{ fontSize: "1.3em", textAlign: "center", padding: "1em" }}
            >
              {" "}
              We ensure that your orders reach you quickly and efficiently.
            </p>
          </Card>
          <Card
            hoverable
            style={{
              width: "280px",
              height: "300px",
              backgroundColor: "#F59E0B",
            }}
          >
            <h2 style={{ textAlign: "center", fontSize: "2em" }}>
              Customer Satisfaction
            </h2>
            <hr />
            <p
              style={{ fontSize: "1.3em", textAlign: "center", padding: "1em" }}
            >
              {" "}
              Our friendly customer support team is always ready to assist you.
            </p>
          </Card>
        </div>
      </div>
      <div style={{ width: "100%", padding: "3em" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50%" }}>
            <h1 style={{ fontSize: "4em" }}>Our Commitments</h1>
            <Divider />
            <img
              src={Images.OurCommitment}
              alt="Our-Commitment-Image"
              width={500}
            />
          </div>
          <div style={{ width: "50%" }}>
            <p
              style={{
                fontSize: "1.6em",
                padding: "1.5em",
                border: "0.2em solid #034f01",
                borderRadius: "2.5em 0",
              }}
            >
              We are committed to providing a top-notch shopping experience with
              a focus on customer satisfaction and product excellence. Our team
              works hard to curate the best collection of fashion and
              technology, making sure you find exactly what you&apos;re looking
              for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

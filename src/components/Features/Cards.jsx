import { useInView } from "react-intersection-observer";
import CardsData from "./CardsData";

const Cards = () => {
  // Use Intersection Observer to detect if the component is in view
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <div className="p-4 bg-gradient-to-tr from-blue-50 via-white to-blue-50 py-16">
      <div
        ref={cardsRef}
        className={`grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-xl::grid-cols-4 transition-opacity duration-700 ${
          cardsInView ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* card1 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/964-e3613a36/1_ifMTFgeeChgdNBy5yQuNWw.webp"
          title="Real-Time Solar Plate Monitoring"
          content="Stay informed with real-time data on the performance of each solar plate. Monitor energy production, status, and overall system health instantly, ensuring you always know how your system is performing."
        />

        {/* card2 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/1004-88c7a3ad/line-graph-with-bat-it-generative-ai_797840-3149.webp"
          title="Energy Usage Tracking"
          content="Track your energy consumption with precision. Our platform provides detailed insights into energy usage patterns, helping you optimize energy production and reduce wastage."
        />

        {/* card3 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/963-cbdfb80c/inspiration-unlimited-iu-e-magazine-hybrid-solar-inverters-solar-inverters-mppt-technology-solar-panels-solar-energy-solutions-off-grid.webp"
          title="Current Wastage Alerts"
          content="Receive instant alerts when your system detects energy wastage. Whether it’s due to inefficiency or underperforming panels, our alert system ensures you take timely action to maximize energy output."
        />

        {/* card4 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/977-650f2409/Pvcell.webp"
          title="Active Solar Plates Display"
          content="Visualize the status of your solar plates at a glance. Our platform displays which plates are active and which are inactive, allowing you to manage your energy production more effectively."
        />

        {/* card5 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/1003-6573b44a/touch-innovation-finger-activates-glowing-button-virtual-screen_904318-6698.webp"
          title="On/Off Control System"
          content="  Take full control of your solar panels with easy-to-use on/off switches. Whether you need to shut down a panel for maintenance or optimize usage during specific times, you can do it all remotely."
        />

        {/* card6 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/982-97e8b061/futuristic-ai-connection-holding-phone-robot-hand-ai-generated-futuristic-ai-connection-holding-phone-robot-hand-294173803.webp"
          title="Real-Time Notifications"
          content="Stay updated with real-time notifications about your system’s performance. From alerts to status updates, our platform ensures you’re always in the loop."
        />

        {/* card7 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/990-0b63d13e/0823-DashboardDesign-Dan-Social.webp"
          title="User-Friendly Dashboard "
          content="Navigate through your data and controls effortlessly with our intuitive dashboard. Designed for both beginners and experts, the interface provides easy access to all critical information and features."
        />

        {/* card8 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/989-59c16ec0/1717904702113.webp"
          title="Energy Efficiency Optimization "
          content="Optimize your energy system’s efficiency by leveraging data-driven insights. Our platform helps you identify areas of improvement, ensuring you get the most out of your solar setup.  "
        />

        {/* card9 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/999-f0b89ab4/WhatsApp%20Image%202024-08-20%20at%2015.42.16_a9235a24.webp"
          title="Remote Access"
          content="Manage your solar energy system from anywhere at any time. Whether you’re at home or on the go, you can monitor and control your panels remotely for ultimate convenience. "
        />

        {/* card10 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/993-0fc42463/69905-19123409.webp"
          title="Historical Data Analysis"
          content="Access and analyze historical data to better understand energy trends over time. Our detailed reports help you track performance, make predictions, and plan future improvements.  "
        />

        {/* card11 */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/994-4afbef3e/477513793.webp"
          title="Customizable Alerts and Reports"
          content="Tailor the platform to your needs with customizable alerts and reports. Set thresholds for notifications and generate detailed performance reports that suit your specific requirements"
        />

        {/* card12  */}
        <CardsData
          image="https://solar-intelli-solutions.odoo.com/web/image/997-bda6c337/eyJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjcwMCwiaGVpZ2h0Ijo0Njd9fSwiYnVja2V0IjoiZmluZWhvbWVidWlsZGluZy5zMy50YXVudG9uY2xvdWQuY29tIiwia2V5IjoiYXBwXC91cGxvYWRzXC8yMDIwXC8wOVwvMjMxMjM3NDlcL2luc3RhbGwtc29sYXItcG.webp"
          title="Automated Maintenance"
          content="Keep your system efficient with automated maintenance scheduling. The platform analyzes performance data to recommend optimal maintenance times, reducing downtime and extending your solar panels' lifespan."
        />
      </div>
    </div>
  );
};

export default Cards;

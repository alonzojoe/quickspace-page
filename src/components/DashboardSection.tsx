import { DASHBOARD_IMG } from "../constants/index";

const DashboardSection = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl px-3 py-2 mx-auto">
        <img
          className="w-[100%] h-auto"
          src={DASHBOARD_IMG}
          alt="dashboard-img"
        />
      </div>
    </section>
  );
};

export default DashboardSection;

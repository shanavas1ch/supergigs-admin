import { Admin } from "../axios/index";

export const Allchart = async () => {
  var Allchart = await Admin.get(`/chart`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return Allchart;
};

export const AlldashboardData = async () => {
  var AlldashboardData = await Admin.get(`/dashboardData`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return AlldashboardData;
};

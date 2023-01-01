import { Admin } from "../axios/index";

export const Allfreelancer = async () => {
  var Allfreelancer = await Admin.get(`/freelancerdata`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return Allfreelancer;
};
export const Allrecruitersdata = async () => {
  var Allrecruitersdata = await Admin.get(`/recruitersdata`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return Allrecruitersdata;
};

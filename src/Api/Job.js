import { Admin } from "../axios/index";

export const Alljobinreviewdata = async () => {
  var Alljobinreviewdata = await Admin.get(`/jobinreviewdata`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return Alljobinreviewdata;
};
export const Alljobinprocessdata = async () => {
  var Alljobinprocessdata = await Admin.get(`/jobinprocessdata`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return Alljobinprocessdata;
};

export const Alljobincompleteddata = async () => {
  var Alljobincompleteddata = await Admin.get(`/jobincompleteddata`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return Alljobincompleteddata;
};

export const Allapplied_freelancer = async () => {
  var Allapplied_freelancer = await Admin.get(`/applied_freelancer`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return Allapplied_freelancer;
};



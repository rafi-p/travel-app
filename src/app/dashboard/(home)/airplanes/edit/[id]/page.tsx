import React, { type FC } from "react";
import FormAirplane from "../../components/form-airplane";
import { getAirplane } from "../../lib/action";

type Params = {
  id: string;
};

interface CreateAirplanePageProps {
  params: Params;
}

const EditAirplanePage: FC<CreateAirplanePageProps> = async ({ params }) => {
  const data = await getAirplane(params.id);

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold ">Edit data Airplane</div>
      </div>
      <FormAirplane type="EDIT" defaultValues={data} />
    </div>
  );
};

export default EditAirplanePage;

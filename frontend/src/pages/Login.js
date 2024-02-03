import Button from "../component/Button";

const Login = () => {
  return (
    <div className=" bg-primary-100">
      <div className="flex justify-between p-3 border  bg-base-b0 ">
        <div>
          <span className=" text-primary-h1 text-3xl font-bold">
            GymSteering
          </span>
        </div>
        <div className="flex gap-3">
          <Button name={"Login"} bgColor={"bg-primary-500"} />
          <Button
            name={"Signup"}
            bgColor={"bg-primary-100"}
            textColor={"text-black"}
          />
        </div>
      </div>

      <div className=" bg-base-b0 flex justify-center align-center border rounded-3xl w-1/2 mx-auto my-40   ">
        <div className=" flex flex-col w-1/2">
          <h1>Login</h1>
          <div className="flex">
            <div>facebook</div>
            <div> google</div>
          </div>
          <div className="flex text-gray-300 ">
            <div className="border  h-0 my-auto w-1/3 justify-between"></div>
            <div className="m-2"> or login with </div>
            <div className="border  h-0 my-auto w-1/3 justify-between"></div>
          </div>
          
          <form action="">

                 <input className="border rounded-md p-1 block w-full my-2" placeholder="User Name" type="text" name="userName"  />
                 <input className="border rounded-md p-1 block w-full my-2" placeholder="Password" type="password" name="password" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

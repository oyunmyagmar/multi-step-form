import { Header, InputField, Button } from "@/components";

export function SecondStepPass({ form, onClickStep, onChangeForm }) {
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Header />
      <div className="h-[434px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 pt-7">
          <InputField
            title="Email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => onChangeForm({ ...form, email: e.target.value })}
          />
          <InputField
            title="Phone number"
            placeholder="Phone Number"
            type="tel"
            value={form.telNumber}
            onChange={(e) =>
              onChangeForm({ ...form, telNumber: e.target.value })
            }
          />
          <InputField
            title="Password"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) =>
              onChangeForm({ ...form, password: e.target.value })
            }
          />
          <InputField
            title="Confirm password"
            placeholder="Confirm Password"
            type="password"
            value={form.confirmPass}
            onChange={(e) =>
              onChangeForm({ ...form, confirmPass: e.target.value })
            }
          />
        </div>
        <div>
          <Button
            name="< Back"
            onClick={() => onClickStep("firstStepBase")}
          ></Button>
          <Button
            name="Continue 2/3 >"
            onClick={() => onClickStep("thirdStepImg")}
          ></Button>
        </div>
      </div>
    </div>
  );
}

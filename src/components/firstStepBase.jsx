import { Header, InputField, Button } from "@/components";

export function FirstStepBase({ form, onChangeForm, onClickStep }) {
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Header />
      <div className="h-[434px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 pt-7">
          <InputField
            title="First name"
            placeholder="First Name"
            type="text"
            value={form.firstName}
            onChange={(e) =>
              onChangeForm({ ...form, firstName: e.target.value })
            }
          />
          <InputField
            title="Last name"
            placeholder="Last Name"
            type="text"
            value={form.lastName}
            onChange={(e) =>
              onChangeForm({ ...form, lastName: e.target.value })
            }
          />
          <InputField
            title="Username"
            placeholder="Username"
            type="text"
            value={form.userName}
            onChange={(e) =>
              onChangeForm({ ...form, userName: e.target.value })
            }
          />
        </div>
        <Button
          name="Continue 1/3 >"
          onClick={() => onClickStep("secondStepPass")}
        ></Button>
      </div>
    </div>
  );
}

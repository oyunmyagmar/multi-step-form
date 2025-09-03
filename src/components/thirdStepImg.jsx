import { Header, InputField, Button } from "@/components";

export function ThirdStepImg({ form, onChangeForm, onClickStep }) {
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Header />
      <div className="h-[434px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 pt-7">
          <InputField
            title="Date of Birth"
            type="date"
            value={form.dateOfBirth}
            onChange={(e) =>
              onChangeForm({ ...form, dateOfBirth: e.target.value })
            }
          />

          <InputField
            title="Profile image"
            type="file"
            value={form.profileImg}
            onChange={(e) =>
              onChangeForm({ ...form, profileImg: e.target.value })
            }
          />
        </div>
        <div>
          <Button
            name="< Back"
            onClick={() => onClickStep("secondStepPass")}
          ></Button>
          <Button
            name="Continue 3/3 >"
            onClick={() => onClickStep("lastStep")}
          ></Button>
        </div>
      </div>
    </div>
  );
}

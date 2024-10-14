import FileUpload from "@/components/FileUpload";
import { Button, Checkbox, Label, Modal, Select } from "flowbite-react";
import { useRef, useState } from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface InputModalProps {
  children: React.ReactNode;
}

const InputModal = (props: InputModalProps) => {
  const { children } = props;
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const listData = useSelector((state: RootState) => state.products.lists);
  const router = useRouter();

  const goToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <Button
        gradientDuoTone="greenToBlue"
        size="xl"
        onClick={() => setOpenModal(true)}
      >
        {children}
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              ファイルを選択
            </h3>
            <div>
              <FileUpload></FileUpload>
            </div>
            <div>
              <div className="max-w-md">
                <div className="mb-2">
                  <Checkbox
                    disabled={listData.length == 0 ? true : false}
                  />
                  &nbsp;&nbsp;
                  <Label
                    value="既存の工程ファイルを使用する"
                  />
                </div>
                <Select
                  disabled={listData.length == 0 ? true : false}
                  required
                >
                  <option>選択</option>
                  <option>最初のステップ</option>
                  <option>第二段階</option>
                  <option>第三段階</option>
                  <option>第四段階</option>
                  <option>第五段階</option>
                </Select>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Button
                onClick={() => goToDashboard()}
                disabled={listData.length == 0 ? true : false}
                gradientDuoTone="greenToBlue"
              >
                次のステップへ
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InputModal;

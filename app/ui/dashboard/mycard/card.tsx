import Image from "next/image";

interface MyComponentProps {
  statnumber: string | number;
  photo: string;
  textColor: string;
  color: string;
  text: string;
}
export const Mycard = ({
  statnumber,
  photo,
  color,
  textColor,
  text,
}: MyComponentProps) => {
  return (
    <div
      style={{ backgroundColor: `${color}`, color: `${textColor}` }}
      className={` h-[200px] p-6 rounded-md  flex flex-col`}
    >
      <div className="flex justify-between px-4 mb-auto">
        <section className={`text-4xl  font-bold`}>{statnumber}</section>
        <section>
          <div>
            <Image
              src={photo}
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-[33px] h-[33px]"
            />
          </div>
        </section>
      </div>
      <div>
        <p className="font-[500]">{text}</p>
      </div>
    </div>
  );
};

import data from "../../../data/data";

function Footer() {
  const { copyrightText, socialIcons, socialIconsHeading } = data;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-slate-500 text-center">
        <div className="my-4 text-center">
          <ul className="flex flex-wrap lg:flex justify-center ">
            <li className="px-2"> {socialIconsHeading} </li>
          </ul>
        </div>
        <div className="">
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: copyrightText,
            }}
          ></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

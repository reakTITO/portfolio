import { socials } from "../constants/constants";

const Footer = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center space-y-6">
        <ul className="mt-6 flex md:hidden space-x-8">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                className="text-xl hover:text-green"
                target="_blank"
              >
                <social.icon />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm tracking-widest">Vireak VanKhann</p>
      </div>
    </div>
  );
};
export default Footer;

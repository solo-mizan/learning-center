import avatar from "../assets/avatar.png";

export default function StudentsTable() {
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class One
            </td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">1</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Mizan Rahman</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">2</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Al Shahriar</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">95%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">3</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Mir Sabbir</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">93%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">4</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Niloy Shahriyar</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">85%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">5</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Shanto Khan</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">80%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">6</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Atikur Rahman</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">97%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">7</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Shakib Khan</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">93%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">8</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Muhammad Mizan</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">92%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">9</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Mahdy Hasan</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">99%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">10</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Tanvir Rahman</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>

          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class Two
            </td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">1</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">ISM Rahik</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">2</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Siam Khan</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">99%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">3</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Labib Rahman</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">4</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Shuvo Khan</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">93%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">5</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Rifat PK</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">99%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">6</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Mostofa Kamal</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">95%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">7</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Ahosan Habib</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">96%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">8</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Nahid Hasan</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">9</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Sohel Rana</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">91%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">10</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">Sohag Ali</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

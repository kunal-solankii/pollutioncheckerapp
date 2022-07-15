/* This example requires Tailwind CSS v2.0+ */
// import Co2Icon from '@mui/icons-material/Co2';
// import { FactoryTwoTone } from '@mui/icons-material';
import FactoryIcon from '@mui/icons-material/Factory';

export default function Header() {
    return (
        
            <div className="bg-sky-600 w-full py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center flex-wrap">
                    <div className="flex items-center py-2 text-xl text-gray-50 font-bold ">
                        Pollution &nbsp;<FactoryIcon /> &nbsp; Checker App
                    </div>
                    
                </div>
            </div>
        
    )
}

import { t } from './i18n.js';

const Logo = () => {
    console.log(`%c
======================================================================
|| PPPPPPPPPPPPPPPPP   TTTTTTTTTTTTTTTTTTTTTTTUUUUUUUU     UUUUUUUU ||
|| P::::::::::::::::P  T:::::::::::::::::::::TU::::::U     U::::::U ||
|| P::::::PPPPPP:::::P T:::::::::::::::::::::TU::::::U     U::::::U ||
|| PP:::::P     P:::::PT:::::TT:::::::TT:::::TUU:::::U     U:::::UU ||
||   P::::P     P:::::PTTTTTT  T:::::T  TTTTTT U:::::U     U:::::U  ||
||   P::::P     P:::::P        T:::::T         U:::::D     D:::::U  ||
||   P::::PPPPPP:::::P         T:::::T         U:::::D     D:::::U  ||
||   P:::::::::::::PP          T:::::T         U:::::D     D:::::U  ||
||   P::::PPPPPPPPP            T:::::T         U:::::D     D:::::U  ||
||   P::::P                    T:::::T         U:::::D     D:::::U  ||
||   P::::P                    T:::::T         U:::::D     D:::::U  ||
||   P::::P                    T:::::T         U::::::U   U::::::U  ||
|| PP::::::PP                TT:::::::TT       U:::::::UUU:::::::U  ||
|| P::::::::P                T:::::::::T        UU:::::::::::::UU   ||
|| P::::::::P                T:::::::::T          UU:::::::::UU     ||
|| PPPPPPPPPP                TTTTTTTTTTT            UUUUUUUUU       ||
======================================================================
%c        :: ${t('header.tag1')} ${t('header.tag2')} ${t('header.tag3')} ${t('header.tag4')} ::
`, "color:#fa8b60", "color:gray; font-size:18px")
}
export default Logo;

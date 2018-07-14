import React from 'react';

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130"
    height="31"
    viewBox="0 0 175 42"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        fill={props.fill}
        d="M76.122 12L66.044 12 65 12 65 13.045 65 16.404 65 17.449 66.044 17.449 70.31 17.449 70.379 17.449 70.381 17.449 75.568 17.449C76.656 17.449 77.33 17.764 77.33 19.329L77.33 26.838C77.33 28.402 76.656 28.717 75.568 28.717L70.923 28.717 70.923 21.595C70.923 20.688 70.185 19.951 69.278 19.951L66.044 19.951 65 19.951 65 20.996 65 37.785C65 38.731 65.769 39.502 66.716 39.502L69.878 39.502 70.923 39.502 70.923 38.457 70.923 34.206 76.122 34.206C78.324 34.206 80.088 33.558 81.366 32.279 82.644 31.002 83.293 29.237 83.293 27.035L83.293 19.171C83.293 16.94 82.643 15.168 81.361 13.902 80.083 12.64 78.32 12 76.122 12M88.7393213 4C87.7789971 4 87 4.77226927 87 5.72429953L87 34 91.2606787 34C92.2220159 34 93 33.2277307 93 32.2757005L93 5.04944264 93 4 91.9414148 4 88.7393213 4zM107.962878 28.6110137L106.276169 28.6110137 103.819 28.6110137C102.490691 28.6110137 101.995613 28.1076197 101.995613 26.7517195L101.995613 19.2472915C101.995613 17.8923803 102.490691 17.3879973 103.819 17.3879973L107.962878 17.3879973 107.962878 28.6110137zM103.259126 12C101.003431 12 99.2094044 12.6349292 97.9296923 13.8850079 96.6479555 15.1370645 96 16.8875702 96 19.0910317L96 26.9079793C96 29.0837492 96.646943 30.826343 97.9246302 32.0912565 99.2063671 33.3581479 101.000394 34 103.259126 34L104.206761 34 104.801057 34 105.110861 33.5035289 107.180269 30.1815239 107.962878 28.9245224 107.962878 29.6445044 107.960853 29.6445044 107.960853 32.9665093 107.960853 34 107.962878 34 109.020867 34 109.701221 34 110.355251 34 112.22116 34C113.285224 34 114 33.3185884 114 32.3019105L114 13.0334907 114 12 112.94201 12 103.259126 12zM134.703371 12L132.088254 12C131.120382 12 130.408954 12.5709498 130.217654 13.4972248L126.734968 25.7615108 123.244009 13.4719168C123.013416 12.5496911 122.318533 12 121.380648 12L118.643513 12C117.926915 12 117.528805 12.3087583 117.318893 12.5669005 117.107946 12.8270674 116.891829 13.2846371 117.06038 13.9801026L117.066584 14.00946 117.075891 14.0388173 122.510867 32.0014661 122.519139 32.0277865 122.528446 32.0530946C122.844865 32.9338151 123.529408 33.4389639 124.40525 33.4389639L124.513825 33.4389639C124.193269 34.1587252 123.886156 34.5697281 123.65246 34.8015499 123.238839 35.2166021 122.286477 35.4443746 120.972198 35.4443746L118.249539 35.4443746C118.249539 35.4443746 118.257812 35.5233358 118.257812 36.5872866L118.257812 39.2628547C118.257812 40.3025099 118.970273 41 120.032245 41L122.197549 41C124.6224 41 126.53643 40.290362 127.887936 38.8893078 129.149479 37.5803749 130.128726 35.7004922 130.80086 33.3012881L136.608094 13.3474011 137 12 135.568872 12 134.703371 12zM153.306357 12C152.360171 12 151.663884 12.5469094 151.444216 13.4617217L148.260035 25.7815239 145.015395 13.4726006C144.834018 12.5627332 144.153853 12 143.230843 12L140.563588 12C139.889469 12 139.509584 12.2957069 139.309062 12.5449314 139.103501 12.7991009 138.893909 13.2471117 139.060172 13.9354462L139.06521 13.9572039 139.072263 13.9799506 144.441034 32.5194875C144.663725 33.4481457 145.370089 34 146.337435 34L150.159459 34C151.125798 34 151.832162 33.4481457 152.056868 32.5214655L157.619108 13.3153518 158 12 156.606417 12 153.306357 12zM174.075369 24.1566195C173.44698 23.1518094 172.382707 22.3269948 170.817717 21.6366824L166.506764 19.4609126 166.491802 19.4530007 166.477838 19.4460778C165.580138 19.0267476 165.065457 18.5708249 165.065457 18.1930321L165.065457 17.7628231C165.065457 17.7094178 165.065457 17.6560126 165.226046 17.55118 165.36469 17.4611823 165.708809 17.3098674 166.467864 17.3098674L172.223116 17.3098674C173.223552 17.3098674 173.895829 16.6284558 173.895829 15.6127669L173.895829 13.0334907 173.895829 12 172.8535 12 172.223116 12 165.678885 12C161.371922 12 159 14.1579681 159 18.0753428 159 19.5331086 159.381024 20.7495617 160.132099 21.6881097 160.844274 22.5781973 161.920516 23.3525736 163.422667 24.0527759L167.713671 26.0821758C168.832803 26.5786469 168.973443 27.1176444 168.973443 27.5340076L168.973443 28.0037761C168.973443 28.2569566 168.973443 28.7287031 167.453338 28.7287031L160.161025 28.7287031 159.118696 28.7287031 159.118696 29.7621938 159.118696 32.3019105C159.118696 33.3185884 159.805935 34 160.831307 34L168.083723 34C172.543295 34 175 31.8291751 175 27.8860868 175 26.3937065 174.6878 25.1386829 174.075369 24.1566195M52.6140345 29.7315348C52.6140345 31.12025 51.4749605 32.2454351 50.0713339 32.2454351L49.070027 32.2454351 48.9073022 32.2454351 48.9053056 32.2454351 47.9039987 32.2454351 47.9039987 19.9740089 47.9039987 18.1056095 47.9039987 14.437901 47.904997 14.437901 49.070027 14.437901C50.0483728 14.437901 50.8420307 15.2225695 50.8420307 16.1898339L50.8420307 18.22405C51.8692937 18.5468005 52.6140345 19.4962987 52.6140345 20.6195098L52.6140345 29.7315348zM45.4701142 15.7160717L45.4701142 16.2697812 45.4701142 34.6349729C45.4701142 37.4015463 43.2019494 39.6430334 40.4046794 39.6430334L14.5953206 39.6430334C11.7970523 39.6430334 9.52888752 37.4015463 9.52888752 34.6349729L9.52888752 16.2697812 9.52888752 15.7160717 9.52888752 5.77594999C9.52888752 3.88682349 11.0782677 2.35696661 12.9880384 2.35696661 17.0142305 2.35696661 20.2777122 5.58348413 20.2777122 9.56407304L20.2777122 10.7080112 34.7212895 10.7080112 34.7212895 9.56407304C34.7212895 5.58348413 37.9857695 2.35696661 42.0119616 2.35696661 43.9217323 2.35696661 45.4701142 3.88682349 45.4701142 5.77594999L45.4701142 15.7160717zM7.02911441 14.437901L7.02911441 18.1056095 7.02911441 19.9740089 7.02911441 32.2454351 6.02780753 32.2454351 6.0258109 32.2454351 5.86308605 32.2454351 4.86177917 32.2454351C3.45815258 32.2454351 2.31907865 31.12025 2.31907865 29.7315348L2.31907865 20.6195098C2.31907865 19.4962987 3.06381936 18.5468005 4.09108235 18.22405L4.09108235 16.1898339C4.09108235 15.2225695 4.88474035 14.437901 5.86308605 14.437901L7.02811609 14.437901 7.02911441 14.437901zM53.226998 16.8738279L53.226998 16.1898339C53.226998 13.9236717 51.3631496 12.0809344 49.0710254 12.0809344L47.8460966 12.0809344 47.8460966 5.77594999C47.8460966 2.59088666 45.2255277 0 42.0029768 0 37.0842938 0 33.0111811 3.64698141 32.4072024 8.35104458L22.5758263 8.35104458C21.9718476 3.64698141 17.8987349 0 12.9800519 0 9.75750095 0 7.1369321 2.59088666 7.1369321 5.77594999L7.1369321 12.0809344 5.92797633 12.0809344C3.6358521 12.0809344 1.7720037 13.9236717 1.7720037 16.1898339L1.7720037 16.8738279C.55406313 17.4936667 0 18.7323573 0 20.217799L0 29.7315348C0 32.4171739 2.21026265 34.6024017 4.92567114 34.6024017L7.11996079 34.6024017 7.1369321 34.6024017 7.1369321 34.6349729C7.1369321 38.6955091 10.4792805 42 14.5863358 42L18.2750985 42 36.4972864 42 40.3956946 42C44.5037482 42 47.8460966 38.6955091 47.8460966 34.6349729L47.8460966 34.6024017 47.8800392 34.6024017 50.0733306 34.6024017C52.7897374 34.6024017 55 32.4171739 55 29.7315348L55 20.5217963C55 19.0353677 54.875211 18.000987 53.226998 16.8738279z"
      />
      <path
        fill={props.fill}
        d="M18 9.89470833C18 7.1964963 15.6600577 5 12.7830606 5 12.3511068 5 12 5.33050388 12 5.7357775L12 11 18 11 18 9.89470833zM36.1480599 33.7133694L36.1449808 33.7133694 36.1429281 33.7133694C34.2677791 33.7133694 32.6800093 32.5198667 32.1339889 30.8695544L40.3520064 29.7220325 40.3520064 29.7230321 40.3561118 29.7220325C40.2935042 31.93611 38.4358032 33.7133694 36.1480599 33.7133694M27.4178917 33.3885048L27.415839 33.3885048 27.4137863 33.3885048C26.0220501 33.3885048 24.8930605 32.2889629 24.8930605 30.9335277L29.9334856 30.9335277 29.9386174 30.9335277C29.9386174 32.2889629 28.8106542 33.3885048 27.4178917 33.3885048M18.6887498 33.7133694L18.6856708 33.7133694 18.6836181 33.7133694C16.3958747 33.7133694 14.5381738 31.93611 14.4765925 29.7220325L14.4806979 29.7230321 22.6987154 30.8695544C22.1516687 32.5198667 20.5638988 33.7133694 18.6887498 33.7133694M40.4259039 13L14.5730698 13C13.1525957 13 12 14.1215327 12 15.5069554L12 34.4940441C12 35.8784673 13.1525957 37 14.5730698 37L40.4259039 37C41.8484307 37 43 35.8784673 43 34.4940441L43 15.5069554C43 14.1215327 41.8484307 13 40.4259039 13M42.2159353 5C39.3406467 5 37 7.19580925 37 9.89559249L37 11 43 11 43 5.7359104C43 5.33056358 42.647806 5 42.2159353 5"
      />
    </g>
  </svg>
);

export default Logo;
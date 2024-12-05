const RefundPolicyData = {
  refundRules: [
    { time: '매치 2일 전', refund: '무료 취소' },
    { time: '매치 1일 전', refund: '80% 환불' },
    { time: '당일 ~ 매치 시작 90분 전까지', refund: '20% 환불' },
    { time: '매치 시작 3시간 ~ 90분 전까지', refund: '무료 취소' },
    { time: '매치 시작 90분 이내', refund: '환불 불가' },
  ],
  refundFeeDescription: [
    '취소 수수료 발생 시 사용된 포인트를 우선 차감 후 차액을 캐시로 지급합니다.',
    '변경은 상단 취소 환불 규정과 동일하게 적용됩니다.',
  ],
  additionalRules: [
    '신청 후 30분 이내에는 하루 1회에 한해 무료 취소가 가능합니다.',
    '쿠폰 신청자는 매치 시작 90분 전까지 취소 시 쿠폰이 반환됩니다.',
    '실 결제금액(쿠폰 제외)을 기준으로 위 규정에 따라 환급됩니다.',
    '매치 시작 90분 전까지 최소 인원이 모이지 않을 시 카카오톡 혹은 LMS으로 안내되며, 자동 전액 환불됩니다. (단, 공지 전 직접 취소하시는 경우 상단 일반 환불 규정대로 처리됩니다.)'
  ],
  notes: [
    '단순 변심으로 취소 혹은 변경을 요청하는 경우 환불이 불가합니다.',
    '참여가 어려울 경우, 마이 플랩에서 미리 취소해 주세요.',
    '참여가 어려울 경우, 원활한 매치 진행을 위해 마이 플랩 에서 미리 취소해 주세요.'
  ],
  weatherRules: [
    '기상청 발표/예보에 따라 환불 가능 시 공지해드립니다.',
    '강수 예보 기준: 하룻동안 1mm 이상의 강수 예보가 있을 경우 환불 처리.',
  ],
  refundMethod: [
    '마이페이지 → [매치 탭] → 취소를 원하는 매치의 [상세 내역 내] [신청 취소하기]',
    '<a href="https://example.com">마이 플랩 바로 가기</a>',
  ],
};

export default RefundPolicyData;